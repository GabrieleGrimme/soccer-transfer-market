import { useState } from 'react';
import styled from 'styled-components/macro';
export default function Tags({ tags, onUpdateTags, onDeleteTag }) {
  const [tag, setTag] = useState('');

  function handleChange(event) {
    setTag(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(tag);
      setTag('');
    } else if (tag.length === 0 && 
        event.key === 'Backspace') {
            onDeleteTag(tags[tags.length - 1])
        }
  }
  return (
    <>
      <label htmlFor="tag">Skills</label>
      <Tag>
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <TagCloud>
          {tags.map((tag, index) => (
              <span key={index + tag}>
                {tag}
                <button
                  onClick={() => {
                    onDeleteTag(tag);
                  }}
                >
                  x
                </button>
              </span>
          ))}
        </TagCloud>
      </Tag>
    </>
  );
}
const Tag = styled.section`
  display: inline-flex;
  gap: 0.2rem;
  font-family: sans-serif;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: row-reverse;
  input {
    border: 1px groove green;
    border-radius: 0.5rem;
    //display: inline-flex;
  }
  span {
    margin: 0.2rem;
    color: green;
    padding: 0.3rem;
    border-radius: 0.3rem;
  }
`;

const TagCloud = styled.article`
  background: none;
`;
