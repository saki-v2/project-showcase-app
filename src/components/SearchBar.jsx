export default function SearchBar(props) {


    return(
        <>
            <input type="text" value={props.query} placeholder="Search projects..." onChange= {(e) => props.onQueryChange(e.target.value)} />
        </>
    )
}