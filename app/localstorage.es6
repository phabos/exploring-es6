class LocalStorage {
  constructor() {
    if( ! this.storageAvailable('localStorage') )
      return;
    if( this.storage )
      return;
    this.storage = window[ 'localStorage' ];
  }

  storageAvailable( type ) {
  	try {
  		var storage = window[ type ],
  			x = '__storage_test__';
  		storage.setItem( x, x );
  		storage.removeItem( x );
  		return true;
  	} catch(e) {
  		return false;
  	}
  }

  getItem( key ) {
    return this.storage.getItem( key );
  }

  removeItem( key ) {
    return this.storage.removeItem( key );
  }

  setItem( key, value, timeout ) {
    this.storage.setItem( key, value );
    if( timeout ) {
      setTimeout( () => { this.removeItem( key ) }, timeout );
    }
    return;
  }

  clear() {
    this.storage.clear();
  }

}

export default LocalStorage;
