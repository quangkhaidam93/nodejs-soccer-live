#!/bin/bash

set -e
  
host="$1"
shift

echo $POSTGRES_PASSWORD
echo $host
echo $POSTGRES_USER
echo $POSTGRES_DATABASE

until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -d $POSTGRES_DATABASE -U $POSTGRES_USER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec "$@"