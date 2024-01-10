import {useForm} from 'react-hook-form'
import { useCustomers } from '../contexts/CustomerContext';
import StickyHeadTable from './StickyHeadTable';

function CustomerForm() {
  const {register, handleSubmit} = useForm();
  const inputStyles = 'bg-zinc-700 text-slate-100 p-2';
  const labelStyles = 'bg-zinc-700 text-slate-100';
  const {createCustomer} = useCustomers();

  return (
    <>
      <form className='grid grid-cols-1 gap-x-10 gap-y-3 sm:grid md:grid-cols-2'
      onSubmit={handleSubmit(values => {
        console.log(values)
        createCustomer({
          "dni": values.dni,
          "names": values.names,
          "surnames": values.surnames,
          "birthDate": values.birthDate,
          "cellPhone": values.cellPhone,
          "email": values.email,
          "bank": values.bank,
          "numberCCI": values.numberCCI
        });
      })}>
          <label htmlFor='dni' className={labelStyles}>DNI</label>
          <input type='text' id='dni' className={inputStyles}
          {...register('dni', {required: true})}/>

          <label htmlFor='names' className={labelStyles}>Nombres</label>
          <input type='text' id='names' className={inputStyles}
          {...register('names', {required: true})}/>

          <label htmlFor='surnames' className={labelStyles}>Apellidos</label>
          <input type='text' id='surnames' className={inputStyles}
          {...register('surnames', {required: true})}/>

          <label htmlFor='birthDate' className={labelStyles}>Fecha de nacimiento</label>
          <input type='text' id='birthDate' className={inputStyles}
          {...register('birthDate', {required: true})}/>

          <label htmlFor='cellPhone' className={labelStyles}>Celular</label>
          <input type='text' id='cellPhone' className={inputStyles}
          {...register('cellPhone', {required: true})}/>

          <label htmlFor='email' className={labelStyles}>Correo</label>
          <input type='text' id='email' className={inputStyles}
          {...register('email', {required: true})}/>

          <label htmlFor='bank' className={labelStyles}>Banco</label>
          <input type='text' id='bank' className={inputStyles}
          {...register('bank', {required: true})}/>

          <label htmlFor='numberCCI' className={labelStyles}>Número de Cuenta o CCI</label>
          <input type='text' id='numberCCI' className={inputStyles}
        {...register('numberCCI', {required: true})}/>

        <button className='mt-5 px-2 py-5 bg-zinc-500 text-slate-100 grid col-span-1 md:col-span-2'>Registrar</button>
      </form>
      <h1 className='mt-10 mb-5 text-4xl bg-zinc-300'>Lista de clientes</h1>
      <StickyHeadTable/>
    </>
    
  )
}

export default CustomerForm