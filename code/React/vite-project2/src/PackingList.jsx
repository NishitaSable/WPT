import Item from "./Item";

export default function PackingList(){
    return(
        <section>
            <h1>Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space Suit"
                    />
                <Item
                    isPacked={false}
                    name="Helment"
                    />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                    />                                                
            </ul>
        </section>
    )
}

