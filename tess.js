const imageData = [
    {
      asset_id: '953084ae47424f641a0e640933e833df',
      public_id: 'f3f4dyk08x5flcfegimg',
      version: 1732448833,
      version_id: 'af66655fccc3cadf006edf180ebedc99',
      signature: '867551cba8c285c8736219d16d404cb90a0dc397',
      width: 1212,
      height: 1228,
      format: 'jpg',
      resource_type: 'image',
      created_at: '2024-11-24T11:47:13Z',
      tags: [],
      bytes: 238023,
      type: 'upload',
      etag: '6990d9689cbe4f91173ee2cc04e2e291',
      placeholder: false,
      url: 'http://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/f3f4dyk08x5flcfegimg.jpg',
      secure_url: 'https://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/f3f4dyk08x5flcfegimg.jpg',
      asset_folder: '',
      display_name: 'f3f4dyk08x5flcfegimg',
      original_filename: 'image-1732448831070-153847230',
      api_key: '754114411292679'
    },
    {
      asset_id: 'ab286bb7acf4393ad5558d1d4392297a',
      public_id: 'wbfs7lwllw2asgywgxyb',
      version: 1732448833,
      version_id: 'af66655fccc3cadf006edf180ebedc99',
      signature: 'da72939749b2721026e2c6a64e83e8d5cb82cbbb',
      width: 1200,
      height: 600,
      format: 'jpg',
      resource_type: 'image',
      created_at: '2024-11-24T11:47:13Z',
      tags: [],
      bytes: 30247,
      type: 'upload',
      etag: '6e7a4511055640f8d190221898a6127b',
      placeholder: false,
      url: 'http://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/wbfs7lwllw2asgywgxyb.jpg',
      secure_url: 'https://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/wbfs7lwllw2asgywgxyb.jpg',
      asset_folder: '',
      display_name: 'wbfs7lwllw2asgywgxyb',
      original_filename: 'images-1732448831072-240007427',
      api_key: '754114411292679'
    },
    {
      asset_id: 'eb3f2ace24782383800ffdf4f23933ec',
      public_id: 'hgnaqt08axtnae8frrvg',
      version: 1732448833,
      version_id: '1d0fdc3bfb8cfd806131d9ab14890740',
      signature: '5b5185d4e6661a17f44aed8bec8f7d7eb29d6511',
      width: 486,
      height: 240,
      format: 'png',
      resource_type: 'image',
      created_at: '2024-11-24T11:47:13Z',
      tags: [],
      bytes: 31907,
      type: 'upload',
      etag: 'd0fd22b0805136f0ec8d3851066b4562',
      placeholder: false,
      url: 'http://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/hgnaqt08axtnae8frrvg.png',
      secure_url: 'https://res.cloudinary.com/de0jlobqt/image/upload/v1732448833/hgnaqt08axtnae8frrvg.png',
      asset_folder: '',
      display_name: 'hgnaqt08axtnae8frrvg',
      original_filename: 'images-1732448831072-797098379',
      api_key: '754114411292679'
    }
  ]


const images = [];
const signleImage = imageData[0].secure_url;

imageData.filter(image => {
    if (signleImage !== image.secure_url) {
        images.push(image.secure_url);
    }
})

console.log(images)