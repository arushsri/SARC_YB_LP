import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import SearchContext from '../Contexts/SearchContext'
import '../FormInputs.css'

export default function NameSearch() {
    const { name, setNameResults, setName, setDisplayName, displayName } = useContext(SearchContext);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (name) {
            axios
              .post('https://yearbook.sarc-iitb.org/api/search/search/', {
                query: {
                  multi_match: {
                    fields: ['name', 'hostel', 'department', 'degree', 'program'],
                    query: name,
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
                setNameResults(mappedUsers);
              })
              .catch(error => {
                console.error('Error searching users:', error);
              });
          } else {
            setNameResults([]); // Clear users when search term is empty
          }
        }, 200);

        return () => clearTimeout(delayDebounceFn);
      }, [name, setNameResults]);

    const handleChange = (value) => {
        setName(value);
        setDisplayName(value);
    }

    return (
        <div className='form-input'>
            <input
                type="text"
                name="liststudents"
                placeholder="Search your name"
                value={displayName}
                onChange={(e) => handleChange(e.target.value)}
                required
            />
        </div>
    )
}
