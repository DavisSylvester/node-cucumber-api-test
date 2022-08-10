Feature: API USER ACCOUNT

 Scenario: CREATING A NEW CONSUMER
    When I want to create a new Member    
        | objectId                  | 33a0caa3-2e88-40d4-b4ca-65df5df1b113  |
        | email                     | tescollec2@test.com                   |
        | firstName                 | Rolan2                                |
        | lastName                  | do2                                   |
        | displayName               | Rolan2 do                             | 
        | dateOfBirth               | 1992-11-16                            |
        | administrativeArea        | RJ                                    |  
        | municipality              | Carapebus                             |
        | cpf                       | 463.167.111-84                        |          
        | country                   | BR                                    |
        | extension_AgreedToTos     | V1_BR_HUB                             |
        | consents                  | marketing,personalization             |             
        | phoneNumber               | (33)98765-1494                        |      
        | correlationId             | e7d1e269-b4dc-45b6-8740-a76cf22664a4  |                      
        | applicationId             | 0a3708c8-5c8e-4264-9090-473d013a603e  |                      
        | flowName                  | signUp                                |           
    Then the ko Id should be "50fbc9e7f7dee48d685a11c985ff18941ff1c983e14227f519b4d16994ce1e41"


Scenario: GET Member
    When we I call the get member api using id "01G9YSPQ22P1H1JFZ9H8Q0XW94"   
    Then the user account email should be "Devan10@hotmail.com"
