import todosFromServer from '../../api/todos.json';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = () => (
  <section className="TodoList">
    {todosFromServer.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
