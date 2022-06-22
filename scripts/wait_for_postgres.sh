set -e 
  
host="$1"
shift

sh ./scripts/load_dotenv.sh

echo $POSTGRES_PASSWORD
echo $host
echo $POSTGRES_USER

until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U $POSTGRES_USER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
exec "$@"