import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import SearchContext from '../Contexts/SearchContext'
import '../FormInputs.css'

export default function Searchbar() {
    const { input, updateResults } = useContext(SearchContext);

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        if (input) {
          axios.post('https://yearbook.sarc-iitb.org/api/search/search/', {
            query: {
              multi_match: {
                fields: ['name', 'hostel', 'department', 'degree', 'program'],
                query: input,
                fuzziness: 'AUTO',
                type: 'best_fields',
              },
            },
          })
          .then(response => {
            const foundUsers = response.data.hits.hits.map(hit => hit._source);
            const mappedUsers = foundUsers.map(user => ({
              id: user.id,
              display: user.name,
              department: user.department,
              profile_image: user.profile_image,
              hostel: user.hostel,
              is_ib: user.is_ib,
            }));
            updateResults(mappedUsers);
          })
          .catch(error => {
            console.error('Error searching users:', error);
          });
        } else {
          updateResults([]); // Clear users when search term is empty
        }
      }, 200);
    
      return () => clearTimeout(delayDebounceFn);
    }, [input, updateResults]);


    const handleChange = (value) => {
        list.setInput(value);
       
        // fetchData(value);
    }

    return (
        <div className='form-input'>
            <input
                type="text"
                id=""
                name="liststudents"
                placeholder="Search..."
                value={list.input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
