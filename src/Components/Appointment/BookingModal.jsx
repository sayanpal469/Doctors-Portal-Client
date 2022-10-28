import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment

    const handelSubmit = (e) => {
        e.preventDefault()

        const slot = e.target.slot.value
        const name = e.target.full_name.value
        const number = e.target.phone_number.value
        const email = e.target.email.value
        const patientInfo = {slot, name, number, email}
        console.log(patientInfo);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center mb-5">{name}</h3>
                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='full_name' type="name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input name='phone_number' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;