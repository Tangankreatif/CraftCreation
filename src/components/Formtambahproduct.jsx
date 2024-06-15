import React from 'react'

const Formtambahproduct = () => {
  return (
    <div>
    <h1 className='title'>Produk</h1>
    <h2 className='subtitle'>Tambah Produk</h2>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                <form>
                <div className='field'>
                    <label className='label'>Nama Produk</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Nama produk' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Deskrpsi</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Deskripsi' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Harga</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Harga' />
                    </div>
                </div>
                <div className='field'>
                    <div className="control">
                        <button className='button is-success'>
                            Simpan
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Formtambahproduct