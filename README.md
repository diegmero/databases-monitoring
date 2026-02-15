# Stack de Bases de Datos con Observabilidad

Stack completo de bases de datos (MongoDB, PostgreSQL, MySQL, Redis) con exporters para Prometheus/Grafana.

## Bases de Datos Incluidas

- **MongoDB 7.0** + Exporter (puerto 27017)
- **PostgreSQL 16** + Exporter (puerto 5432)
- **MySQL 8.0** + Exporter (puerto 3306)
- **Redis 7** + Exporter (puerto 6379)
- **Adminer** - UI web para administrar todas las DBs (puerto 8080)

## Métricas Expuestas

- MongoDB: puerto 9216
- PostgreSQL: puerto 9187
- MySQL: puerto 9104
- Redis: puerto 9121

## Desplegar desde Portainer

1. Stacks → Add stack → Repository
2. Repository URL: `https://github.com/tu-usuario/databases-observability`
3. Compose path: `docker-compose.yml`
4. Environment variables:
```
   MONGO_PASSWORD=tu_password_segura
   POSTGRES_PASSWORD=tu_password_segura
   MYSQL_PASSWORD=tu_password_segura
   REDIS_PASSWORD=tu_password_segura
```
5. Deploy

## Dashboards de Grafana

Importar estos IDs:

- MongoDB: **2583**
- PostgreSQL: **9628**
- MySQL: **7362**
- Redis: **11835**

## Acceso a Bases de Datos

### Adminer (UI Web)
- URL: `https://db.grintic.com`
- Servidor: mongodb / postgres / mysql / redis
- Usuario: admin
- Password: (la que configuraste)

### Conexión directa

**MongoDB:**
```bash
mongosh mongodb://admin:password@IP:27017
```

**PostgreSQL:**
```bash
psql -h IP -U admin -d demo_db
```

**MySQL:**
```bash
mysql -h IP -u admin -p demo_db
```

**Redis:**
```bash
redis-cli -h IP -a password
```

## Prometheus Config

Agregar a `prometheus.yml`:
```yaml
scrape_configs:
  - job_name: 'mongodb'
    static_configs:
      - targets: ['IP_WORKER:9216']
  
  - job_name: 'postgres'
    static_configs:
      - targets: ['IP_WORKER:9187']
  
  - job_name: 'mysql'
    static_configs:
      - targets: ['IP_WORKER:9104']
  
  - job_name: 'redis'
    static_configs:
      - targets: ['IP_WORKER:9121']
```

## Datos de Demo

Cada base de datos se inicializa con:
- Tabla `users` (3 registros)
- Tabla `products` (3 registros)