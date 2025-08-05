import todosFromServer from '../../api/todos.json';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ user }) => (
  <article className="TodoInfo TodoInfo--completed">
    {todosFromServer
      .filter(todo => todo.userId === user.id)
      .map(todo => (
        <h2 key={todo.id} className="TodoInfo__title">
          {todo.title}
        </h2>
      ))}

    <UserInfo user={user} />
  </article>
);
