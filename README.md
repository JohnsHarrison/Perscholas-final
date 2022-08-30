# MusicBook

![logo_final](https://user-images.githubusercontent.com/105838964/187538558-d86b0dc1-85d8-4754-b920-fc844a28701c.png)


## Description 
MusicBook is a an app that lets music lovers share their current favorite Artist, ALbum, or Song. Contribute to the melting pot of musical tastes from around the world by adding your own favorites, edit existing information which may be incorrect, or remove irrelevant entries.

## MVP
- CRUD for managing music data.
- Data models for Songs, Artists, and Albums,
- Link models using IDs

## Post MVP
- Add a feature to listen to music or link to sources.
- Add profile creation.
- Restrict contribution to verified.
- Add the ability for profiles to save music to a personal list.
- Allow for user disscusion.

## Features
- View community curated list of music.
- Add, remove, and edit list.

## API Endpoints
All API calls will begin with "https://music-api-jsh.herokuapp.com/api"
## Artists
- Get all artists ( /artists )

Example 
```js
axios.get("https://music-api-jsh.herokuapp.com/api/artists")
```

Response

<img width="924" alt="Get Artists" src="https://user-images.githubusercontent.com/105838964/187212654-918bc310-c124-497a-af1a-9391d29c06cd.png">

- Get artists by ID ( /artists/{id} )

Example
```js
axios.get("https://music-api-jsh.herokuapp.com/api/artists/630665e593b460f268842700")
```

Response

<img width="616" alt="Get Artists Id" src="https://user-images.githubusercontent.com/105838964/187212926-87f8d5a4-1637-4733-bb42-77c60ab16c6d.png">

- Create Artist ( /artists )

Example

```js
axios.post("https://music-api-jsh.herokuapp.com/api/artists")
{
  "name": "test name",
  "image": "https://mui.com/static/images/avatar/1-sm.jpeg",
  "genre": "test genre"
}
```

Response 

<img width="562" alt="Create Artist" src="https://user-images.githubusercontent.com/105838964/187216139-531490f0-8a59-4aee-bd23-3476ecf2a584.png">

- Update Artist ( /artists/{id} )

Example 

```js
axios.put("https://music-api-jsh.herokuapp.com/api/artists/630cc286374604208f1fc2e0")
{
  "name": "updated name",
  "image": "https://mui.com/static/images/avatar/1-sm.jpeg",
  "genre": "updated genre"
}
```
<img width="552" alt="Update Artist" src="https://user-images.githubusercontent.com/105838964/187217700-2e820a30-ca07-4676-8fb0-64dd4b9335b3.png">

Delete Artist ( /artists/{id} )

Example 

```js
axios.delete("https://music-api-jsh.herokuapp.com/api/artists/630cc286374604208f1fc2e0")
```

Response

<img width="238" alt="Delete Artist" src="https://user-images.githubusercontent.com/105838964/187219412-354869e6-bc77-479c-a609-9c17458aba70.png">

## Albums
- Get all albums ( /albums )

Example 
```js
axios.get("https://music-api-jsh.herokuapp.com/api/albums")
```
Response

<img width="802" alt="Get all albums" src="https://user-images.githubusercontent.com/105838964/187220850-8570411a-e9a9-427e-85cf-cdc821203646.png">

- Get album by ID ( /albums/{id} )

Example
```js
axios.get("https://music-api-jsh.herokuapp.com/api/63066689849caa5784b288ef")
```
Response

<img width="712" alt="Get album by id" src="https://user-images.githubusercontent.com/105838964/187222096-3e4fbfc0-1d80-404d-ad06-ce450d809860.png">

- Get Albums by Artist ID ( /albums/{id}/artist )

Example
 ```js
 axios.get("https://music-api-jsh.herokuapp.com/api/albums/630665e593b460f2688426fd/artist")
 ```
 Response
 
<img width="612" alt="Get Albums By Artist" src="https://user-images.githubusercontent.com/105838964/187562200-094272fa-756c-42c7-b4b9-56222731c1a5.png">


- Create Album ( /albums )

Example 
```js
axios.post("https://music-api-jsh.herokuapp.com/api/albums")
{
  "artist": "Test Band",
  "artist_id": "630665e593b460f268842701",
  "name": "Test Album",
  "image": "https://mui.com/static/images/avatar/1-sm.jpeg",
  "tracks": 14,
  "released": 2018,
  "runtime": "85 minutes"
}
```
Response

<img width="670" alt="Create Album" src="https://user-images.githubusercontent.com/105838964/187223324-c4e9272a-5f29-48a0-8730-23bcb68a3b87.png">

- Update Album ( /albums/{id} )

Example
```js
axios
{
  "artist": "Updated Band",
  "artist_id": "630665e593b460f268842701",
  "name": "Updated Album",
  "image": "https://mui.com/static/images/avatar/1-sm.jpeg",
  "tracks": 100,
  "released": 1900,
  "runtime": "100 minutes"
}
```
Resonse

<img width="522" alt="Update Album" src="https://user-images.githubusercontent.com/105838964/187224242-d4bf3cda-7a9d-4584-a8c2-e4e9f46ff9cb.png">

- Delete Album ( /albums/{id )

Example
```js
axios.delete("https://music-api-jsh.herokuapp.com/api/albums/630ccaba374604208f1fc2e6")
```

Response

<img width="199" alt="Delete album" src="https://user-images.githubusercontent.com/105838964/187225076-b75f7b17-316f-4d0c-8af7-882313887aee.png">

## Songs
- Get all songs ( /songs )

Example
```js
axios.get("https://music-api-jsh.herokuapp.com/api/songs")
```
Response

<img width="622" alt="Get all songs" src="https://user-images.githubusercontent.com/105838964/187225915-b97efd86-dff1-4b32-81d1-0b10371077c7.png">

- Get songs by Album ID ( /songs/{id}/album )

Example
```js
axios.get("https://music-api-jsh.herokuapp.com/api/songs/63066689849caa5784b288eb/album")
```
Response

<img width="577" alt="Get Songs By Album ID" src="https://user-images.githubusercontent.com/105838964/187562669-4afc1494-49be-4c4a-a63e-ba9d2867b92c.png">



- Create Song ( /songs )

Example
```js
axios.post("https://music-api-jsh.herokuapp.com/api/songs")
{
 "name": "Test Song",
  "album_id": "63066689849caa5784b288eb",
 "track_number": 5,
  "length": "5:34"
}
```
Response

<img width="460" alt="Create Song" src="https://user-images.githubusercontent.com/105838964/187226998-b737859a-9669-4649-b9dc-9a62998308f6.png">

- Update Song ( /songs/{id} )

Example
```js
axios.put("https://music-api-jsh.herokuapp.com/api/songs/630ccee4374604208f1fc2eb")
{
 "name": "updated Song",
 "album_id": "63066689849caa5784b288eb",
 "track_number": 99,
 "length": "10:20"
}
```
Reponse

<img width="416" alt="Update Song" src="https://user-images.githubusercontent.com/105838964/187227727-c085d696-2f6a-4031-aa73-734521bbf298.png">

- Delete Song ( /songs/{id} )

Example
```js
axios.delete("https://music-api-jsh.herokuapp.com/api/songs/630ccee4374604208f1fc2eb")
```

Response

<img width="158" alt="Delete Song" src="https://user-images.githubusercontent.com/105838964/187228062-44cdf250-a99a-47ac-8410-7b9727937a99.png">


## Wireframes
See what everyones listeng to

<img width="1261" alt="Community Page" src="https://user-images.githubusercontent.com/105838964/187242257-70c35dcc-c832-4956-a5b6-772dac3cdf02.png">

Contribute our list of Artists, Albums, and Songs

<img width="1280" alt="Contribute Page" src="https://user-images.githubusercontent.com/105838964/187243330-f76c024b-1dfd-43ba-a2e4-746cce1f892b.png">

Edit Data

<img width="299" alt="Edit" src="https://user-images.githubusercontent.com/105838964/187245654-4c5a37f4-8099-41d1-aaa0-2056aa01a4f6.png">

<img width="298" alt="Edit 2" src="https://user-images.githubusercontent.com/105838964/187245663-d8d731f6-465d-4ed9-b3c4-83f2af5de4e9.png">


## Component Hierarchy

<img width="990" alt="Component Hierarchy" src="https://user-images.githubusercontent.com/105838964/187250717-0e96bc2e-b541-48fa-81b1-7a20e56f1fa2.png">


## Dependencies
Axios
Cors
Express
Mongoose
Morgan







