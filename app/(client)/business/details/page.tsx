"use client"
export default function Business() {
    return (
        <>
            <div className='card shadow-lg rounded'>
                <div className='card-body pb-10 px-3'>
                    <span className=' font-medium text-sm'>Business Details</span>
                    <div className='grid grid-cols-2 gap-4 w-2/3 mt-3'>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">Business name</label>
                        </div>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">Business Email</label>
                        </div>
                    </div>
                    <div className="relative w-2/3 mt-3">
                        <input type="text" id="name" className="form-input peer" placeholder=" " />
                        <label htmlFor="name" className="form-input-label">Phone</label>
                    </div>
                    <p className=' font-medium text-sm mt-5'>Business Location</p>
                    <div className='grid grid-cols-2 gap-4 w-2/3 mt-3'>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">Country</label>
                        </div>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">City</label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-2/3 mt-3'>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">Address 1</label>
                        </div>
                        <div className="relative">
                            <input type="text" id="name" className="form-input peer" placeholder=" " />
                            <label htmlFor="name" className="form-input-label">Address 2</label>
                        </div>
                    </div>
                    <p className=' font-medium text-sm mt-5'>Registration</p>

                    <div className="relative w-2/3 mt-3">
                        <input type="file" id="name" className="form-input peer" placeholder=" " />
                        <label htmlFor="name" className="form-input-label">Certificate</label>
                    </div>
                    <div className='mt-4'>
                        <button className='prim-btn-1'>Save Changes</button>
                    </div>

                </div>
            </div>
        </>
    )
}

