import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Componente ImgMediaCard que recebe props para tornar o card reutilizável
function ImgMediaCard({ title, image, description }) {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: 4 }}>
      <CardMedia
        component="img"
        alt={title}
        height="500"
        image={image} // A imagem é passada via prop
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}  {/* O título é passado via prop */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}  {/* A descrição também é passada via prop */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhe</Button>
        <Button size="small">Leia mais</Button>
      </CardActions>
    </Card>
  );
}

// Componente ActionAreaCard
function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          image="https://images.tcdn.com.br/img/img_prod/476855/quadro_decorativo_seja_bem_vindo_1117_1_20190516175826.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Seja "Bem Vindo"
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Seja bem-vindo! Ansiamos muito pela sua chegada e finalmente você retornou. Estamos extremamente felizes. 

Boas-vindas é o que desejamos para todos os novos colegas que chegam hoje. Que a jornada de vocês seja alegre, repleta de boas memórias e de objetivos concluídos. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Componente App
function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <ListarTarefa />
      
      <ActionAreaCard />
      <ImgMediaCard
        title="Estatísticas"
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/99/df/a5/main-building-viewed.jpg?w=600&h=500&s=1"
        description="Pessoas silenciosas têm as mentes mais barulhentas. A palavra impossível foi inventada para ser desafiada. Nunca é tarde para fazer o que ainda movimenta os seus sonhos."
      />

      <ImgMediaCard
        title="Empregos"
        image="https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/trabalho/WhatsApp%20Image%202022-12-26%20at%2012_21_04.jpeg"
        description="Se sentir atraído, aceite a vaga proposta."
      
      />

      
    </div>
  );
}

export default App;