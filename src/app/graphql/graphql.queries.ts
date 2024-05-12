import {gql} from "apollo-angular";


const FindLatestIndication = gql`
  query FindLatestIndication($id: String!){
    latestIndication(counter: $id){
      value,
      timestamp
    }
  }
`

const FindLatestConsumption = gql`
  query FindLatestConsumption($id: String!){
    latestConsumption(counter: $id){
      value,
      timestamp
    }
  }
`


const FindAllCounters = gql`
  query{
  findAllCounters{
    counterName
    counter{
    id,
      timezone,
    password,
    number
    model{
      name
    }
    }
  }
  }
`

const FindAllNamedCountersId = gql`
  query{
  findAllCounters{
    counterName
    counter{
      id
    }
  }
}
`

const FindAllCounterIds= gql`
   query{
    findAllCounters{
    id
    }
  }
`

const FindCounterById = gql`
  query FindCounterById($id: String!){
    findCounterById(id: $id){
        id,
        ip,
        port,
        model{
            name,
            description
        },
        number,
        password,
        timezone
    }
  }
`

const FindByIntervalIndications = gql`
  query FindByIntervalIndications($id: String!, $from: String!, $to: String!){
    findByIntervalIndications(id: $id, from: $from, to: $to){
      value,
      timestamp
    }
  }
`

const FindByIntervalConsumptions = gql`
  query FindByIntervalConsumptions($id: String!, $from: String!, $to: String!){
    findByIntervalConsumptions(id: $id, from: $from, to: $to){
      value,
      timestamp
    }
  }
`

const GetPopUp = gql`
query{
    getPopUp{
        models{
            name,
            id
        }
        buses{
            name,
            id
        }

    }
}
`

const FindModels = gql`
query{
    findModels{
        name,
        id
    }
}
`

const CreateCounter = gql`
mutation CreateCounter(
    $uuid: String!,
    $busId: String!,
    $modelId: String!,
    $number: String!,
    $password: String!,
    $transformRation: Int!,
    $serial: String!,
    $name: String!
   ){
    createCounter(
      uuid: $uuid,
      busId: $busId,
      modelId: $modelId,
      number: $number,
      password: $password,
      transformRation: $transformRation,
      serial: $serial,
      name: $name
    )
   }
`


export {
  FindAllCounters,
  FindCounterById,
  FindAllCounterIds,
  FindByIntervalIndications,
  FindByIntervalConsumptions,
  FindLatestIndication,
  FindLatestConsumption,
  FindAllNamedCountersId,
  GetPopUp,
  FindModels,
  CreateCounter,
};
