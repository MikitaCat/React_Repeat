import React from 'react';
import MyInput from '../components/UI/Input/MyInput';
import MySelect from '../components/UI/Select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        onChange={(event) => setFilter({ ...filter, query: event.target.value })}
        value={filter.query}
        placeholder="Search..."
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sorting by"
        options={[
          { value: 'title', name: 'By Title' },
          { value: 'body', name: 'By Content' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
