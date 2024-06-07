import React from 'react'

const DeleteBooks = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">BOOK TITLE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button:btn className="btn-danger">DELETE</button:btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBooks