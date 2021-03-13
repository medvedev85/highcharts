import React from 'react';

const Filters = () => {
  return (
    <>
      <h4>Filter parameters: </h4>
      <div>Complementary:</div>
      <div class="task-item"><input type="checkbox" checked="checked" /> 0</div>
      <div class="task-item"><input type="checkbox" /> 1</div>

      <div>Threads per block:</div>
      <div class="task-item"><input type="checkbox" checked="checked" /> 256</div>
      <div class="task-item"><input type="checkbox" /> 512</div>
      <div class="task-item"><input type="checkbox" /> 1024</div>
    </>
  );
}

export default Filters;