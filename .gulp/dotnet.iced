Install "path"

# ==============================================================================
# file selections

Import
  projects:() ->
    source '**/*.csproj'
      .pipe except /preview/ig

# ==============================================================================
# Functions

dotnet = (cmd) ->
  foreach (file, callback) ->
    # check if the file is an actual file. 
    # if it's not, just skip this tool.
    if !file or !file.path
      return callback null, file
    
    # do something with the file
    await execute "dotnet #{cmd} #{ file.path } /nologo", defer code,stdout,stderr
    # Fail "dotnet #{cmd} failed" if code
    # or just done, no more processing
    return callback null

# ==============================================================================
# Tasks

task 'build/scripts', '', [], (done) ->
  tscPath = path.join(".", "node_modules", ".bin", "tsc");
  execute "#{tscPath} -p ./.scripts/", (code, stdout, stderr) ->
    done()

task 'build/generator','dotnet',['version-number'], (done) ->
  execute "dotnet build -c #{configuration} #{solution} /nologo /clp:NoSummary /p:VersionPrefix=#{version}", (code, stdout, stderr) ->
    execute "dotnet publish -c #{configuration} #{sourceFolder} --output #{sourceFolder}/bin/netcoreapp2.0 /nologo /clp:NoSummary /p:VersionPrefix=#{version}", (code, stdout, stderr) ->
      done()

task 'build', '', ['build/scripts', 'build/generator'], (done) ->
  done()

task 'clear-cache-on-force', '', (done)->
  if global.force 
    execute "dotnet nuget locals http-cache --clear", (c,o,e) ->
      done()
  else 
    done()
        
# the dotnet gulp-plugin.
module.exports = dotnet