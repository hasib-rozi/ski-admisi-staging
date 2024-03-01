/// <reference types="Cypress" />

describe('Manajemen Verifikasi', () => {
    before(() => {
        cy.visit('https://staging.ecampuz.com/app/develop-v.3/eadmisi/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    // Menampilkan laman Admisi 
    it('Show Admission page', () => {
        cy.get('.campus-name').contains('UNIVERSITAS SOLUSI KAMPUS INDONESIA') // assertion laman terdapat elemen class mengandung tulisan tersebut

        cy.get('.labelbig').contains('Portal PMB Online') // assertion laman terdapat elemen class mengandung tulisan tersebut
    })

    // Mendaftarkan pendaftar baru
    it.only('Register a new registrar', () => {
        cy.get('.labelbig').contains('Portal PMB Online')

        cy.get('[style="padding-top: 10px;"] > .nav-item').click()
        // cy.get('.title').should('have.text', 'Pendaftaran Calon Mahasiswa')
        cy.get('.title').contains('Pendaftaran Calon Mahasiswa') // assertion

        cy.get('#namalengkap').type('Gregory Sarkovich')
        cy.get('#txtPhone').type('0892238176255')
        cy.get('#email').type('grevich@gmail.com')
    })


})