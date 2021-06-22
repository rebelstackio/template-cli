# template-cli
A command line tool that parses templates

### Options

+ **Connection String** -c, --connectionstring <connectionstring> Postgres connection string URI (default: false)
+ **Configuration File** -C, --configfile <configfile> Configuration file (default: /etc/pgrefresher/pgrefresher_config.json')
+ **Source** -src, --source <source> Data source for the parsing (default: false)
+ **Run** --no-run Prevents the client from running the queries on the templates (default: true)
+ **Verbose** -vv, --verbose produces more descriptive output (default: false)
+ **Silent** -s, --silent Does not produce stdout (default: false)
+ **Help** - (-h, --help) output usage and options.

### Usage
```console
foo@bar:~$ template-cli parse --no-run -src '[{"srvname":"server1"}, {"srvname":"server2"}]' ./templates/refresh.sql
```