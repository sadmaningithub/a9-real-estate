import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'


const Leaflet = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 justify-between mb-24 bg-[#F5F5F5] rounded-md'>
            <div className='pl-8 m-auto space-y-5'>
                <h3 className='text-2xl font-bold'>Search Your Desired Home at Your Nearest Location</h3>
                <p>We have properties all over usa. Here is an eagle eye view for you to find your next home</p>
            </div>

            <div className=' w-1/2'>

                <MapContainer className='' center={[51.505, -0.09]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            Home here 
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Leaflet;