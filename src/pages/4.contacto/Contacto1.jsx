import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Contacto = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    departamento: '',
    pais: 'Colombia',
    mensaje: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form Data Submitted:', formData);

    // Example: Send data to a backend API
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // }).then((response) => {
    //   if (response.ok) {
    //     alert('Form submitted successfully!');
    //   } else {
    //     alert('Failed to submit the form.');
    //   }
    // });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="mb-4"></div>
          <h2 className="text-base/7 font-semibold text-gray-900">Contacto</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Gracias por su interés en Fisgon-Route. Por favor, complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
            <br></br>
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          {/* Empresa */}
          <div className="sm:col-span-4">
              <label htmlFor="empresa" className="block text-sm/6 font-medium text-gray-900">
                Empresa
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Opcional"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Nombre */}
            <div className="sm:col-span-3">
              <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Obligatorio"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* Apellido */}
            <div className="sm:col-span-3">
              <label htmlFor="apellido" className="block text-sm/6 font-medium text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  autoComplete="apellido"
                  placeholder="Obligatorio"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Obligatorio"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Telefono */}
            <div className="sm:col-span-4">
              <label htmlFor="telefono" className="block text-sm/6 font-medium text-gray-900">
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  autoComplete="tel"
                  placeholder="Obligatorio"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Dirección */}
            <div className="col-span-full">
              <label htmlFor="direccion" className="block text-sm/6 font-medium text-gray-900">
                Dirección
              </label>
              <div className="mt-2">
                <input
                  id="direccion"
                  name="direccion"
                  type="text"
                  autoComplete="direccion"
                  placeholder="Opcional"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Ciudad */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="ciudad" className="block text-sm/6 font-medium text-gray-900">
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  id="ciudad"
                  name="ciudad"
                  type="ciudad"
                  autoComplete="city-name"
                  placeholder="Opcional"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Departamento */}
            <div className="sm:col-span-2">
              <label htmlFor="departamento" className="block text-sm/6 font-medium text-gray-900">
                Departamento
              </label>
              <div className="mt-2">
                <input
                  id="departamento"
                  name="departamento"
                  type="text"
                  autoComplete="department-name"
                  placeholder="Opcional"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* País */}
            <div className="sm:col-span-2">
              <label htmlFor="pais" className="block text-sm/6 font-medium text-gray-900">
                País
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="pais"
                  name="pais"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Colombia</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="col-span-full">
              <label htmlFor="mensaje" className="block text-sm/6 font-medium text-gray-900">
                Mensaje
              </label>
              <div className="mt-2">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Obligatorio"
                  rows={3}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Déjenos saber el propósito de su contacto a través de este mensaje</p>
            </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-700">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
      <div className="mb-4"></div>
      <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Sede principal</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
          Tels. +57: (601)3590025, 310-3011575, Bogota D. C. Colombia.          </p>
      </div>
      <div className="mb-2"></div>
    </form>
  )
}

export default Contacto