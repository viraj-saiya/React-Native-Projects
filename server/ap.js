file <ref *2> IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: false,
      ended: true,
      endEmitted: true,
      reading: false,
      sync: false,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: false,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: true
    },
    _events: [Object: null prototype] {
      end: [Function: clearRequestTimeout],
      readable: [Function: bound ]
    },
    _eventsCount: 2,
    _maxListeners: undefined,
    socket: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false
      },
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      parser: HTTPParser {
        '0': [Function: bound setRequestTimeout],
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 1,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular *1],
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular *2],
        locals: [Object: null prototype] {},
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(async_id_symbol)]: 11,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(RequestTimeout)]: undefined
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers: {
      'user-agent': 'PostmanRuntime/7.29.0',
      accept: '*/*',
      'postman-token': 'f09efa1b-f5a7-4799-9099-e2389c7eba6f',
      host: 'localhost:3000',
      'accept-encoding': 'gzip, deflate, br',
      connection: 'keep-alive',
      'content-type': 'multipart/form-data; boundary=--------------------------062431401458405535725728',
      'content-length': '117530'
    },
    rawHeaders: [
      'User-Agent',
      'PostmanRuntime/7.29.0',
      'Accept',
      '*/*',
      'Postman-Token',
      'f09efa1b-f5a7-4799-9099-e2389c7eba6f',
      'Host',
      'localhost:3000',
      'Accept-Encoding',
      'gzip, deflate, br',
      'Connection',
      'keep-alive',
      'Content-Type',
      'multipart/form-data; boundary=--------------------------062431401458405535725728',
      'Content-Length',
      '117530'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '/api/upload',
    method: 'POST',
    statusCode: null,
    statusMessage: null,
    client: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false
      },
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      parser: HTTPParser {
        '0': [Function: bound setRequestTimeout],
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 1,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular *1],
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular *2],
        locals: [Object: null prototype] {},
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(async_id_symbol)]: 11,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(RequestTimeout)]: undefined
    },
    _consuming: true,
    _dumped: false,
    next: [Function: next],
    baseUrl: '',
    originalUrl: '/api/upload',
    _parsedUrl: Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/api/upload',
      path: '/api/upload',
      href: '/api/upload',
      _raw: '/api/upload'
    },
    params: {},
    query: {},
    res: <ref *3> ServerResponse {
      _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: <ref *1> Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: [Circular *3],
        [Symbol(async_id_symbol)]: 11,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: false,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      req: [Circular *2],
      locals: [Object: null prototype] {},
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': [Array] }
    },
    body: [Object: null prototype] {},
    route: Route {
      path: '/api/upload',
      stack: [ [Layer], [Layer] ],
      methods: { post: true }
    },
    files: [
      {
        fieldname: 'photo',
        originalname: 'img4.jpeg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: './images',
        filename: 'photo_1644343916944_img4.jpeg',
        path: 'images\\photo_1644343916944_img4.jpeg',
        size: 117322
      }
    ],
    [Symbol(kCapture)]: false,
    [Symbol(RequestTimeout)]: undefined
  }
  file undefined
  file [
    {
      fieldname: 'photo',
      originalname: 'img4.jpeg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: './images',
      filename: 'photo_1644343916944_img4.jpeg',
      path: 'images\\photo_1644343916944_img4.jpeg',
      size: 117322
    }
  ]
  body [Object: null prototype] {}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  file <ref *2> IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: null,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: false,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: true,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: null
    },
    _events: [Object: null prototype] { end: [Function: clearRequestTimeout] },
    _eventsCount: 1,
    _maxListeners: undefined,
    socket: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false
      },
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      parser: HTTPParser {
        '0': [Function: bound setRequestTimeout],
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 1,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular *1],
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular *2],
        locals: [Object: null prototype] {},
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(async_id_symbol)]: 8,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(RequestTimeout)]: undefined
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: false,
    headers: {
      accept: 'application/json, text/plain, */*',
      'content-type': 'multipart/form-data,boundary=--------------------------467306981405485828942306',
      'content-length': '231',
      host: '192.168.56.1:3000',
      connection: 'Keep-Alive',
      'accept-encoding': 'gzip',
      'user-agent': 'okhttp/4.9.2'
    },
    rawHeaders: [
      'accept',
      'application/json, text/plain, */*',
      'content-type',
      'multipart/form-data,boundary=--------------------------467306981405485828942306',
      'Content-Length',
      '231',
      'Host',
      '192.168.56.1:3000',
      'Connection',
      'Keep-Alive',
      'Accept-Encoding',
      'gzip',
      'User-Agent',
      'okhttp/4.9.2'
    ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '/api/upload',
    method: 'POST',
    statusCode: null,
    statusMessage: null,
    client: <ref *1> Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      _events: [Object: null prototype] {
        end: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        drain: [Function: bound socketOnDrain],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause]
      },
      _eventsCount: 8,
      _maxListeners: undefined,
      _writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false
      },
      allowHalfOpen: true,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      _server: Server {
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 0,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 60000,
        requestTimeout: 0,
        _connectionKey: '6::::3000',
        [Symbol(IncomingMessage)]: [Function: IncomingMessage],
        [Symbol(ServerResponse)]: [Function: ServerResponse],
        [Symbol(kCapture)]: false,
        [Symbol(async_id_symbol)]: 4
      },
      parser: HTTPParser {
        '0': [Function: bound setRequestTimeout],
        '1': [Function: parserOnHeaders],
        '2': [Function: parserOnHeadersComplete],
        '3': [Function: parserOnBody],
        '4': [Function: parserOnMessageComplete],
        '5': [Function: bound onParserExecute],
        '6': [Function: bound onParserTimeout],
        _headers: [],
        _url: '',
        socket: [Circular *1],
        incoming: [Circular *2],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
      },
      on: [Function: socketListenerWrap],
      addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
      _paused: false,
      _httpMessage: ServerResponse {
        _events: [Object: null prototype],
        _eventsCount: 1,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular *1],
        _header: null,
        _keepAliveTimeout: 5000,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular *2],
        locals: [Object: null prototype] {},
        [Symbol(kCapture)]: false,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype]
      },
      [Symbol(async_id_symbol)]: 8,
      [Symbol(kHandle)]: TCP {
        reading: true,
        onconnection: null,
        _consumed: true,
        [Symbol(owner_symbol)]: [Circular *1]
      },
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(RequestTimeout)]: undefined
    },
    _consuming: false,
    _dumped: false,
    next: [Function: next],
    baseUrl: '',
    originalUrl: '/api/upload',
    _parsedUrl: Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/api/upload',
      path: '/api/upload',
      href: '/api/upload',
      _raw: '/api/upload'
    },
    params: {},
    query: {},
    res: <ref *3> ServerResponse {
      _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      socket: <ref *1> Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        _paused: false,
        _httpMessage: [Circular *3],
        [Symbol(async_id_symbol)]: 8,
        [Symbol(kHandle)]: [TCP],
        [Symbol(kSetNoDelay)]: false,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
      _expect_continue: false,
      req: [Circular *2],
      locals: [Object: null prototype] {},
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': [Array] }
    },
    body: {},
    route: Route {
      path: '/api/upload',
      stack: [ [Layer], [Layer] ],
      methods: { post: true }
    },
    [Symbol(kCapture)]: false,
    [Symbol(RequestTimeout)]: undefined
  }
  file undefined
  body {}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  