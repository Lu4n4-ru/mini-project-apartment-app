


App
- Header
- ApartmentList
- ApartmentDetails
- AddApartment
- UpdateApartment
- Footer


<Router path="/apartments/:aparmentId/edit" element={<UpdateApartment />} />




App
- Header
- ApartmentList
- ApartmentDetails
    - UpdateApartment
- AddApartment
- Footer


<Router path="/apartments/:aparmentId" element={<ApartmentDetails />} />