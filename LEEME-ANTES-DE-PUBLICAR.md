# Huanguelén Dona Vida — publicación GitHub Pages + Supabase

## Archivos de publicación
- `index.html`: sitio público original con calendario conectado a Supabase.
- `admin.html`: panel privado para crear, editar y eliminar actividades.
- `supabase-config.js`: URL y publishable key del proyecto.
- `assets/` y `logo.png`: recursos del sitio.

## Publicar
Subí el CONTENIDO de esta carpeta a la raíz de la rama/carpeta que publica GitHub Pages (normalmente `main` / root). No subas `huanguelen.db`, `.git`, `.venv`, contraseñas ni claves secretas.

## Supabase
El proyecto configurado es `kjhldidfswxpteezssyi`. La tabla `public.actividades` y las políticas RLS ya fueron creadas. La clave incluida en `supabase-config.js` es una publishable key, apta para frontend; nunca agregues una `service_role` o secret key al sitio.

### Habilitar la cuenta administradora
1. En Supabase → Authentication → Users, creá un usuario con el correo y contraseña que usarán para entrar a `admin.html`.
2. En SQL Editor ejecutá (reemplazá el correo):

```sql
INSERT INTO public.calendario_admins (user_id)
SELECT id FROM auth.users WHERE email = 'TU_CORREO'
ON CONFLICT (user_id) DO NOTHING;
```

3. Entrá a `https://TU-USUARIO.github.io/TU-REPOSITORIO/admin.html`.

La cuenta solo podrá modificar el calendario si su usuario está agregado a `calendario_admins`. Las políticas RLS también protegen las operaciones en la base de datos.

## Importante
GitHub Pages publica archivos estáticos: no ejecuta `app.py`, Flask ni SQLite. El calendario usa Supabase. El asistente local que ya está escrito en el JavaScript de la página se conserva; cualquier función que dependiera de endpoints Flask no funcionará en GitHub Pages y deberá migrarse por separado.
