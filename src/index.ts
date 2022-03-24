import express from 'express';
import bodyparser from 'body-parser';
import client from '../connection'
import { Request, Response } from 'express';

const app = express();
const PORT = 3300;

app.use(bodyparser.json());
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));
client.connect();

app.get('/contacts', (req: Request, res: Response) => {
    client.query('Select * from contacts', (err: string, result: any) => {
        if(!err){
            res.send(result.rows)
        }
    });
    client.end;
});


app.get('/contacts:id', (req: Request, res: Response) => {
    client.query('Select * from contacts', (err: string, result: any) => {
        if(!err){
            res.send(result.rows)
        }
    });
    client.end;
});

app.post('/contacts', (req: Request, res: Response) => {
    const contact = req.body;
    let insertQuery = `insert into contacts(id, name, email, mobile) values('${contact.id}',' ${contact.name}', '${contact.email}', '${contact.mobile}')`;
    client.query(insertQuery, (err: string, result: any) => {
        if(!err){
            res.send('Successful');
        } else {
             console.log(err);
        }
    });
    client.end;
});

app.delete('/contacts/:id', (req: Request, res: Response) => {
    let insertQuery = `delete from contacts where id=${req.params.id}`
    client.query(insertQuery, (err: string, result: any) => {
        if(!err){
            res.send('Deleted');
        } else {
             console.log(err);
        }
    });
    client.end;
});