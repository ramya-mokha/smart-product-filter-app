
const Input = ({handleChange,value,title,name,color}) => {
  return (
    <div className='sidebar-label-container'>
      <label className="jjj">
        <input onChange={handleChange} type="radio" name={name} value={value} />
        <span className="checkmark" style={{backgroundColor:color}}></span>{title} 
      </label>
    </div>
  )
}

export default Input
