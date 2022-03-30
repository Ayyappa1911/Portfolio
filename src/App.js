import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
// import Hello from './Components/Hello';
import Message  from './Components/Message';
import Counter from './Components/Counter';
import Functionclick from './Components/Functionclick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import BasicButtons from './Components/Button';
// import SplitButton from './Components/Splitbutton';
// import MaterialUIbutton from './Components/MaterialUIbutton';
import Button from '@material-ui/core'
import RecipeReviewCard from './Components/Card';
import SimplePaper from './Components/Paper';
import ActionAreaCard from './Components/Lizcard';
import Header from './Components/Header';
import Palette from './Components/Button1';
import Stack from '@mui/material/Stack';
import ActionAreaCard1 from './Components/Naresh';
import Divider from '@mui/material/Divider';
// import { shadows } from '@mui/system';
// import Box from '@mui/material/Box';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
// import MaterialUIbutton from './Components/MaterialUIbutton'

function App() {
  return (
    <div className="App">
      <article>
        <div id="Homepage">
        <header>
          <Stack paddingLeft={135} direction="row" spacing={2}>
            <Palette link="#Homepage">home</Palette>
            <Palette link="#about">about</Palette>
            <Palette link='#achivements'>achivements</Palette>
            <Palette link='#publications'>publications</Palette>
          </Stack>
        </header>
        </div>
      
        <div class="welcome">
          <h1>Welcome to my world!</h1>
        </div>
        {/* <ActionAreaCard path="naresh.png"></ActionAreaCard> */}
        <Stack direction="column" divider={<Divider orientation="horizantal" flexItem />} spacing={2}>
          <div class="home">
            <Stack direction="row" spacing={1}>
              <ActionAreaCard1 path="naresh2.jpeg"></ActionAreaCard1>
                <div className='intro'>
    
                  <p ><text>Hi! I am Naresh Bhuma scientist at Illumina, Cambridge, UK.<br/>
                  I am Passionate and motivated researcher within the fields <br/>of organic/medicinal chemistry with more than 10 years of research<br/> experience.
                  In this website most of my research work is mentioned. <br/><br/> <br/></text> <ActionAreaCard1 path="chem4.gif"></ActionAreaCard1> </p>
                </div>
                
                <ActionAreaCard path="chem1.gif"></ActionAreaCard>
              
            </Stack>
          </div>
          <div id="about">
            <div class="welcome1">
              <h1>About me..!</h1>
            </div>
            
            <div class="bodyx">
              <Stack direction="row" spacing={32}>
                <div class="scientist">
                  <ActionAreaCard path="sci.gif"></ActionAreaCard>
                </div>
                  
                <div>
                  <h1>I am ..... </h1> 
                    <p><text >I am <b>Naresh Bhuma</b> a chemistry related scientist at Illumina, Cambridge, UK.</text></p>
                  <h1>I lived at ......</h1>
                  <h1>I am intrested in ......</h1>
                    <p>Passionate and motivated researcher within the fields of organic/medicinal chemistry with more than<br/>
                     10 years of research experience. My experience includes novel reaction discoveries, multistep synthesis<br/>
                      of carbohydrates, sugar derived peptides, glycosylation reactions, transition metal-catalysis, C-H bond<br/>
                      activation, bioactive heterocyclic molecules, macrocylisations, super acid chemistry, nucleosides synthesis,
                      <br/> phosphoramidite chemistry, oligonucleotides synthesis and conjugation. I have expertise in acquiring of<br/>
                      analytical data using instruments such as LCMS, NMR, HRMS, FRET, MST, CD, UV-Vis spectroscopy. I am also<br/>
                      well-versed with the purification of small/macro molecules using crystallization, silica gel chromatography<br/>
                      and HPLC techniques. I have pioneered in practical laboratory drug discovery techniques, optimization of<br/>
                      compound potency and properties to achieve the structural activity relationship for the mode of action<br/> studies.
                      I have the excellent communication and writing skills as well as the ability to work within a team<br/>
                      by developing a long-standing professional relationship. Experienced in leading team, development<br/>
                      and delivery of target molecules by effective coordination with clients and team.</p>
                </div>
              </Stack>
            </div>
            <div class="navigate">
                <Palette link='Homepage'>
                    <Fab aria-label="navigate">
                      <NavigationIcon ></NavigationIcon> 
                    </Fab>
                </Palette>
              </div>
          </div>
          <div id="achivements">
            <div class="welcome1">
              <h1>My Achivements!</h1>
            </div>
            <div class="trophy">
              <ActionAreaCard path="trophy.gif"></ActionAreaCard>
            </div>
            <div class="navigate">
              <Palette link='Homepage'>
                  <Fab aria-label="navigate">
                    <NavigationIcon ></NavigationIcon> 
                  </Fab>
              </Palette>
            </div>
          </div>
          <div id="publications">
            <div class="welcome1">
              <h1>Finally, My Publications :)</h1>
            </div>
            <div class="papers">
              <Stack direction="column" spacing={6}>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
                <RecipeReviewCard></RecipeReviewCard>
              </Stack>
              <div class="navigate">
                <Palette link='Homepage'>
                    <Fab aria-label="navigate">
                      <NavigationIcon ></NavigationIcon> 
                    </Fab>
                </Palette>
              </div>
              
              
            </div>
            
              {/* <BasicButtons></BasicButtons> */}
            
          </div>
          
        </Stack>

        
        <div class="footer">
          <footer>
            <p><text color='#00FFFF'>Author: Hege Refsnes</text></p>
            <p><a href="mailto:hege@example.com">hege@example.com</a></p>
          </footer>
        </div>

    </article>
      

    
      {/* <img paddingright="200px" align="right" src="chem1.gif" alt="Chemical Animation"></img> */}
      {/* <Header> */}
      {/* </Header> */}
      {/* <Palette>Hey</Palette> */}
      {/* <Greet name="Ayyappa" heroname="Ironman"> */}
          {/* <p>hehe Ironman</p> Children Tag */}
        {/* </Greet> */}
      {/* <Greet name="Daanki" heroname="Naruto">
          <button>Action</button>
        </Greet> */}
      {/* <Greet name="Akhil" heroname="-_-"/>
      <Welcome/>
      <Message/>
      <Counter/>
      {/* <Hello/> */}
      {/* <Functionclick/>
      <ClassClick/>
      <EventBind/> } */}

      {/* <button class='button button-blue'>
        <b>
         OK!
        </b>
      </button> */}

      {/* <BasicButtons></BasicButtons> */}
      

      

      {/* <MaterialUIbutton/> */}
      {/* <MaterialUIbutton/> */}
      {/* <SimplePaper></SimplePaper> */}
      {/* <SimplePaper></SimplePaper> */}
      
    </div>
  );
}

export default App;



