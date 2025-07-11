import { useParams, Link, NavLink } from "react-router-dom"


function ApartmentDetailsPage (props) {

    const {apartmentId} = useParams();

    const apartment = props.newApartmentList.find((apartmentsObj) => {
        return apartmentsObj.id === parseInt(apartmentId)
    })

    return (
        <div>
             <h2>Details for apt. with Id... {apartment.id}</h2>


        <p>
            <Link to="/item-details" className="detail-button">
            </Link>
        </p>

        </div>
       
    )
}

export default ApartmentDetailsPage