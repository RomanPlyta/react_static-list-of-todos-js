import usersFromServer from '../../api/users.json';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = () => (
  <section className="TodoList">
    {usersFromServer.map(user => (
      <TodoInfo key={user.id} user={user} />
    ))}
  </section>
);
