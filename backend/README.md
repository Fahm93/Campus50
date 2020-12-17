# Campus50 Backend

## Kebutuhan Sistem
1. PHP Minimal versi 7.3
2. Database MySQL Minimal versi 5.7 atau MariaDB Minimal versi 10

## Instalasi
1. Clone Project.
`git clone https://github.com/Team-50/Campus50.git`
2. Masuk ke dalam folder Campus50.
`cd Campus50/backend`
2. Buat file .env, kemudian salin isinya dari .env.example atau cara mudahnya "save as" file .env.example menjadi .env
3. Eksekusi perintah ini untuk membuat JWT_SECRET.
`php artisan jwt:secret`
4. Sesuaikan user dan nama database
5. Buat struktur database dengan mengeksekusi perintah :
`php artisan migrate`
6. Isi database dengan nilai default, supaya sistem bisa berjalan  dengan mengeksekusi perintah :
`php artisan db:seed`
7. extract file public.zip didalam folder storage/app sehingga strukturnya menjadi sebagai berikut :

<ul>
<li>public/exported</li>
<li>public/exported/pdf</li>
<li>public/exported/excel</li>
<li>public/images</li>
<li>public/images/buktibayar</li>
<li>public/images/pmb</li>
<li>public/images/sliders</li>
<li>public/users/no_photo.png</li>
<li>public/logo.png</li>
</ul>

8. Buatlah shortcut atau symlink ke folder storage/app/public dari folder /public dengan cara mengeksekusi file symlink.php tetapi sebelumnya sesuaikan terlebih dahulu pathnya.

`php symlink.php`

atau juga bisa diakses melalui web browser misalnya `http://localhost:8000/symlink.php`

