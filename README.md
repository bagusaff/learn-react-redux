# Learn React-Redux

npm i react-redux redux

## Step yang harus dilakukan dalam mengintegrasikan redux

1. Membuat Global Store ( Penyimpanan Utama / State)

2. Membuat Reducer, merupakan satu-satunya fungsi yang dapat mengupdate value store. Tidak ada fungsi lain yang dapat mengupdate store. Reducer juga dapat disebut Agent , didalam agen terdapat task list yang dapat dilakukan.

3. Dispatch/Action , adalah fungsi untuk memanggil reducer . Karena reducer tidak akan bekerja tanpa dipanggil.

4. Subscribe, proses pemanggilan STORE yang kita perlukan.

### Redux thunk : agar react-redux support async funtions
