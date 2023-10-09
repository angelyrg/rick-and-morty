import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";
import MenuNavbar from "../components/MenuNavbar";
import PaginationBar from "../components/PaginationBar";

import "../assets/css/characters.css";
import CharacterDetailModal from "../components/CharacterDetailModal";

export const CharactersListPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [show, setShow] = useState(false);
  const [singleCharacter, setSingleCharacter] = useState({});

  const [debeEjecutarEfecto, setDebeEjecutarEfecto] = useState(false);

  
  const api_characters_url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchByName}&status=${status}&gender=${gender}`;
  
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok){
        setCharacters([]);
        setTotalPages(0);
        throw new Error('La solicitud no fue exitosa.');
      }
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setLoading(false);

    } catch (error) {
      console.log("Hubo un error: ", error);
    }
  }

  function handleStatus(e){
    setStatus(e.target.value);
  }

  function handleGender(e){
    setGender(e.target.value);
  }

  function handleModalShow(){
    setShow (true);
  }

  function handleModalClose(){
    setShow ( false );
  }

  useEffect(() => {
    fetchData(api_characters_url);
  }, [api_characters_url]);
  
  useEffect(() => {
    if (debeEjecutarEfecto){
      setShow(true);
      console.log(singleCharacter);
    }

  }, [singleCharacter, debeEjecutarEfecto]);

  return (
    <>
      <MenuNavbar />
      <CharacterDetailModal 
        character={singleCharacter}
        show={show}
        handleModalClose={handleModalClose}
      />

      <Container>
        <Row>
          <Col>
            <h5>Characters</h5>
            {/* <label className="switch">
                <input type="checkbox" id="themeSwitch" />
                <span className="slider round"></span>
            </label> */}
          </Col>
        </Row>
        <Row className="mb-2 d.flex justify-content-center"  xs={1} md={1} lg={3}>
          <Col >
            <Form.Control
              type="text"
              id="inputSearch"
              value={searchByName}
              placeholder="Search character"
              autoComplete="off"
              aria-describedby="inputHelper"
              onChange={e=>{setSearchByName(e.target.value)}}
            />

            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Filters</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <span className="fw-bold">Status: </span>
                    <label className="filter-option status">
                      <input type="radio" value="" checked={status === ''} onChange={handleStatus} />
                      <span>All</span>
                    </label>
                    <label className="filter-option status">
                      <input type="radio" value="alive" checked={status === 'alive'} onChange={handleStatus} />
                      <span>Alive</span>
                    </label>
                    <label className="filter-option status">
                      <input type="radio" value="dead" checked={status === 'dead'} onChange={handleStatus} />
                      <span>Dead</span>
                    </label>
                    <label className="filter-option status">
                      <input type="radio" value="unknown" checked={status === 'unknown'} onChange={handleStatus} />
                      <span>Unknown</span>
                    </label>
                  </div>

                  <div>
                    <span className="fw-bold">Gender: </span>
                    <label className="filter-option gender">
                      <input type="radio" value="" checked={gender === ''} onChange={handleGender} />
                      <span>All</span>
                    </label>
                    <label className="filter-option gender">
                      <input type="radio" value="female" checked={gender === 'female'} onChange={handleGender} />
                      <span>Female</span>
                    </label>
                    <label className="filter-option gender">
                      <input type="radio" value="male" checked={gender === 'male'} onChange={handleGender} />
                      <span>Male</span>
                    </label>
                    <label className="filter-option gender">
                      <input type="radio" value="genderless" checked={gender === 'genderless'} onChange={handleGender} />
                      <span>Genderless</span>
                    </label>
                    <label className="filter-option gender">
                      <input type="radio" value="unknown" checked={gender === 'unknown'} onChange={handleGender} />
                      <span>Unknown</span>
                    </label>
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            
          </Col>
        </Row>
        <Row>
          {
            (searchByName != '') ? (
              <span id="inputHelper" >
                Results for {searchByName}
              </span>
            ): ''
          }
          {loading ? (
            <p>Loading...</p>
          ) : (
            characters.length > 0 ? (
              <>
                {characters.map((character) => (
                  <Col key={character.id} xs={12} md={6} lg={4} className="mb-2">
                    <CharacterCard
                      character = {character}
                      setSingleCharacter = {setSingleCharacter}
                      setDebeEjecutarEfecto = {setDebeEjecutarEfecto}
                    />
                  </Col>
                ))}
              </>            
            ):(
              <p>No data to show</p>
            )
          )}
        </Row>
        <Row className="my-2">
          <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </Row>
      </Container>
    </>
  );
};


function switchTheme(){
  const themeSwitch = document.getElementById('themeSwitch');

  // Escucha el cambio en el interruptor de tema
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', themeSwitch.checked);
    
    // Guarda la preferencia del tema en el almacenamiento local
    localStorage.setItem('theme', themeSwitch.checked ? 'dark' : 'light');
  });

  // Verifica la preferencia del tema almacenada en el almacenamiento local
  if (localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = true;
    document.body.classList.add('dark-theme');
  } else {
    themeSwitch.checked = false;
    document.body.classList.remove('dark-theme');
  }

}
