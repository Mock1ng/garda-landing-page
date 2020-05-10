import React from 'react'

const Form = () => {
  return (
    <div className="form-wrapper">
      <h2 className='head'>HUBUNGI KAMI</h2>
      <p className='desc'>Apabila terdapat pertanyaan seputar Ruangguru atau kerjasama dan hal lainnya, hubungi kami di +62 21 285 43000 atau isi formulir di bawah ini. Anda juga dapat melihat daftar pertanyaan yang sering ditanyakan di halaman Bantuan.</p>

      <form action="#">
        <div className="form-group">
          <label htmlFor="nama">Nama*</label>
          <input type="text" className='form-control' id='nama' placeholder='Masukkan Nama Anda' />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail*</label>
          <input type='email' className='form-control' id='email' placeholder='Masukkan Email Anda' />
        </div>

        <div className="form-group">
          <label htmlFor="telepon">E-mail*</label>
          <input type='number' className='form-control' id='telepon' placeholder='Masukkan nomor telepon Anda' />
        </div>

        <div className="form-group">
          <label htmlFor="subjek">Subjek Pesan*</label>
          <select className="form-control" id="subjek">
            <option>--Klik untuk pilih subjek pesan--</option>
            <option>Saran</option>
            <option>Kritik</option>
            <option>Pertanyaan</option>
            <option>lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="isi-pesan">Isi Pesan*</label>
          <textarea className="form-control" id="isi-pesan" rows="3" placeholder='Masukkan pesan anda'></textarea>
        </div>

        <button className='form-button'>Kirim Pesan</button>
      </form>
    </div>
  )
}

export default Form
