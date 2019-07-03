
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post<any[]>('...', todo).pipe(map(r => r))
  }

  getTodos() {
    return this.http.get<any[]>('...').pipe(map(r => r))
  }

  delete(id) {
    return this.http.delete('...').pipe(map(r => r))
  }
}