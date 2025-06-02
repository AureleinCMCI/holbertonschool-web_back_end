// full_server/routes/index.js

import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Route pour la page d'accueil
router.get('/', AppController.getHomepage);

// Route pour la liste de tous les étudiants
router.get('/students', StudentsController.getAllStudents);

// Route pour la liste des étudiants par major (CS ou SWE)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
