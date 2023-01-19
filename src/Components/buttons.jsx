
const Buttons = ({colours, title, size}) => {
    return ( 
        <div className="py-3">
           <button className={`btn ${colours} ${size} mx-2` }  > {title}</button>
        </div>
     );
}
export default Buttons;