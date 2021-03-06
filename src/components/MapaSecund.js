/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw';


const navigation = [
    { name: 'Empieza ya', href: '#' },
    { name: 'Novedades', href: '#' },
    { name: 'Contacto', href: '#' },
]

export default function Example() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div class="flex items-center justify-center  bg-blue-400" style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>


            <div class=" w-full bg-blue-400" >
                <div className="w-full bg-gray-100 rounded-lg shadow ">
                    <section className="bg-dark w-full rounded-3xl shadow-lg border flex flex-col">
                        <div className="sidebar">
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div>
                        <div ref={mapContainer} className="map-container  " style={{ height: '400px' }} />
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                            <table class="text-sm text-left text-white bg-blue-400 text-white w-full " >
                                <tbody>
                                    <tr
                                        class="bg-blue-500 border-b  ">
                                        <td class="w-1/2 p-4">
                                            <div class="flex items-center">

                                                VEHICULOS A ESTACIONAR
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Plazas requeridas : 1
                                        </th>
                                    </tr>
                                    <tr
                                        class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Placa del vehiculo
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium bg-blue-500 text-white dark:text-white whitespace-nowrap">
                                           <input className="bg-blue-500 border-2 border-b  font-bold " type="text" name="remember" defaultValue="Introducir placa" placeholder="Introducir placa" />
                                        </th>
                                    </tr>
                                    <tr class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Cedula
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium   text-white ">                                            
                                            <input className="bg-blue-500 border-2 border-b  font-bold " type="text" name="remember" defaultValue="Introducir cedula" placeholder="Introducir placa" />
                                        </th>
                                    </tr>
                                    <tr class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Al reservar tendra 3 minutos para llegar al lugar del parqueadero
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            <button class="border-2 border-b bg-blue-500 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white">Reservar</button>
                                        </th>
                                    </tr>

                                </tbody>
                            </table>

                            <div class="flex justify-center w-full px-full mx-auto  rounded border-2 border-gray-200">
                                <button class="border-2 border-transparent bg-blue-500 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">Recargar</button>
                                <div class="border-2 border-transparent bg-gray-900 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded ">
                                    Saldo disponible = $20
                                </div>
                            </div>
                        </div>



                    </section>

                </div>

            </div>

        </div>
    )
}
