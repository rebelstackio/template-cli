# tmplt-cli
A command line tool that parses templates

### Options

+ **Source** -src, --source <source> Data source for the parsing (default: false)
+ **Verbose** -vv, --verbose produces more descriptive output (default: false)
+ **Silent** -s, --silent Does not produce stdout (default: false)
+ **Help** - (-h, --help) output usage and options.

### Usage
```console
foo@bar:~$ tmplt parse --no-run -src '[{"srvname":"server1"}, {"srvname":"server2"}]' ./templates/refresh.sql
```
