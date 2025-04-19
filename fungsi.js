import { hewan_peliharaan } from './data.js';

const tambah = (jenis_dt, ras_dt, nama_dt, Karakteristik_dt) => {
    hewan_peliharaan.push({
        jenis: jenis_dt,
        ras: ras_dt,
        nama: nama_dt,
        Karakteristik: Karakteristik_dt
    });
    return hewan_peliharaan; // Ditambahkan return
};

const filter1 = () => {
    let ram = hewan_peliharaan.filter(function (daftar) {
        return daftar.fav === true;
    });
    const asken = ram.map(data => data.nama);
    asken.sort();
    asken.reverse();
    return asken; // Ditambahkan return
};

const fillter2 = (filter1) => {
    filter1.sort(function(a, b) {
        let x = a.nama.toLowerCase();
        let y = b.nama.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    return filter1;
};

const ganti = (jenis_baru) => {
    for(let x = 0; x < hewan_peliharaan.length; x++) {
        if(hewan_peliharaan[x].ras === `persia`) {
            hewan_peliharaan[x].ras = jenis_baru;
        }
    }
    return [...hewan_peliharaan]; // Return salinan array
};

let anjing = 0;
let kucing = 0;
let ikan = 0;

const hitung = () => {
    // Reset counter setiap pemanggilan
    anjing = kucing = ikan = 0;
    
    hewan_peliharaan.forEach(function(item) {
        if(item.jenis === `kucing`) {
            anjing += 1;
        } else if(item.jenis === `anjing`) {
            kucing += 1;
        } else if(item.jenis === `ikan hias`) {
            ikan += 1;
        }
    });
    return {anjing, kucing, ikan};
};

const palindrom = () => {
    let nama_palindrom2 = []; // Buat variabel lokal
    const nama_palindrom1 = hewan_peliharaan.map((x) => x.nama);
    
    for(let x = 0; x < nama_palindrom1.length; x++) {
        let vibecheck = Array.from(nama_palindrom1[x]);
        let reverse = vibecheck.reverse();
        let join = reverse.join("");
        let regex = /[^a-z]/gi;

        if(vibecheck[x] === vibecheck[vibecheck.length - 1] && nama_palindrom1[x] == join) {
            nama_palindrom2.push(nama_palindrom1[x]);
            nama_palindrom2.push(nama_palindrom1[x].replace(/[^a-z]/gi, "").length); 
        }
    } 
    return nama_palindrom2; // Ditambahkan return
};

const modulo = (...bilangan) => {
    let total = 0;
    let hasil = [];
    
    for(let x = 0; x < bilangan.length; x++) {
        if(bilangan[x] % 2 === 0) {
            hasil.push(bilangan[x]);
        }
    }
    
    for(let x = 0; x < hasil.length; x++) {
        total += hasil[x];
    }
    
    return {hasil, total};
};

const anagram = (a, b) => {
    let n1 = a.length;
    let n2 = b.length;

    const x1 = Array.from(a);
    const x2 = Array.from(b);
    
    x1.sort();
    x2.sort();
    const y1 = x1.join("");
    const y2 = x2.join("");

    if (n1 != n2) {
        return false;
    }

    if(y1 === y2) {
        return true;
    }
};

export {
    hewan_peliharaan,
    tambah,
    filter1,
    fillter2,
    ganti,
    hitung,
    palindrom,
    modulo,
    anagram
};