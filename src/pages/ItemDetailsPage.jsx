import { useParams, Link, NavLink } from "react-router-dom"


function ItemDetailsPage (props) {

    const {apartmentId} = useParams();

    const apartments = props.newApartmentList.find((apartmentsObj) => {
        return apartmentsObj.id === parseInt(apartmentId)
    })

    return (
        <div>
             <h2>{apartments.name}</h2>


        <p>
            <Link to="/item-details" className="detail-button">
            </Link>
        </p>

        </div>
       
    )
}

export default ItemDetailsPage