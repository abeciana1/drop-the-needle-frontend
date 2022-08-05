import { useState } from 'react'
import { TextInput } from '../inputs'
// import { Form } from '../../_containers'

interface SearchFormI {
    dataSource: any;
}

const SearchForm = ({ dataSource }: SearchFormI) => {

    const [ searchText, setSearchText ] = useState({searchText: ""})
    
    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement
        setSearchText({
            ...searchText,
            [name]: value
        })
    }

    return (
        <>
            <TextInput
                name="searchText"
                placeholder="Search"
                type="text"
                onChange={searchChangeHandler}
            />
        </>
    )
}

export default SearchForm