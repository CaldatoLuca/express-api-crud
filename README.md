# Api CRUD, Express + Prisma

Dopo aver definito lo schema del db dei post andare a creare le seguenti rotte:

- **/posts** POST, per creare nuovo post
- **/posts/:slug** GET, per recuperare post dallo slug
- **/posts** GET, per ricevere tutti i post (con possibilità di filtraggio per: post pubblicati e per post con determinata parola nel titolo o nel contenuto)
- **/posts/:slug** PUT, per aggiornare un post
- **//posts/:slug** DELETE , per eliminare un post

### Bonus

- implememtare paginazione
- gestire errori 404 e 500 con classe personalizzata
