# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
j1 = Job.create!(
    client: 'PwC', 
    poc: 'Maria Rodriguez', 
    email: 'M.RD43@datapiper.com', 
    role: 'Core Senior Software Developer - Senior Associate', 
    urgancy: 'high', 
    quantity: 'two')

j2 = Job.create!(
    client: 'PwC', 
    poc: 'David Smith', 
    email: 'DavidS_33@datapiper.com', 
    role: 'Zendesk Developer', 
    urgancy: 'high', 
    quantity: 'one')

j3 = Job.create!(
    client: 'PwC', 
    poc: 'Rob Adams', 
    email: 'robert@datapiper.com', 
    role: 'Datavault 2.0', 
    urgancy: 'medium', 
    quantity: 'one')

j4 = Job.create!(
    client: 'PwC', 
    poc: 'Eliza Cath', 
    email: 'elizaT_cat@datapiper.com', 
    role: 'Snowflake Data Engineer', 
    urgancy: 'high', 
    quantity: 'one')

a1 = Applicant.create!(
    first_name: 'Charlie', 
    last_name: 'Lobe', 
    email: 'lobecf@gmail.com', 
    phone: '6513258223', 
    address: '225 w23rd St Apt1G', 
    city: 'New York', 
    zipcode: '10011', 
    job_id: j1.id)