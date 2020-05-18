var searchIndex={};
searchIndex["cc"] = {"doc":"A library for build scripts to compile custom C code","i":[[3,"Build","cc","A builder for compilation of a native static library.",null,null],[3,"Error","","Represents an internal error that occurred, with an…",null,null],[3,"Tool","","Configuration used to represent an invocation of a C…",null,null],[0,"windows_registry","","A helper module to probe the Windows Registry when looking…",null,null],[4,"VsVers","cc::windows_registry","A version of Visual Studio",null,null],[13,"Vs12","","Visual Studio 12 (2013)",0,null],[13,"Vs14","","Visual Studio 14 (2015)",0,null],[13,"Vs15","","Visual Studio 15 (2017)",0,null],[13,"Vs16","","Visual Studio 16 (2019)",0,null],[5,"find","","Attempts to find a tool within an MSVC installation using…",null,[[["str"]],[["command"],["option",["command"]]]]],[5,"find_tool","","Similar to the `find` function above, this function will…",null,[[["str"]],[["option",["tool"]],["tool"]]]],[5,"find_vs_version","","Find the most recent installed version of Visual Studio",null,[[],[["vsvers"],["result",["vsvers","string"]],["string"]]]],[11,"new","cc","Construct a new instance of a blank set of configuration.",1,[[],["build"]]],[11,"include","","Add a directory to the `-I` or include path for headers",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"define","","Specify a `-D` variable with an optional value.",1,[[["str"],["into",["option"]],["self"],["option",["str"]]],["build"]]],[11,"object","","Add an arbitrary object file to link in",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"flag","","Add an arbitrary flag to the invocation of the compiler",1,[[["str"],["self"]],["build"]]],[11,"ar_flag","","Add an arbitrary flag to the invocation of the compiler",1,[[["str"],["self"]],["build"]]],[11,"is_flag_supported","","Run the compiler to test if it accepts the given flag.",1,[[["str"],["self"]],[["bool"],["error"],["result",["bool","error"]]]]],[11,"flag_if_supported","","Add an arbitrary flag to the invocation of the compiler if…",1,[[["str"],["self"]],["build"]]],[11,"shared_flag","","Set the `-shared` flag.",1,[[["self"],["bool"]],["build"]]],[11,"static_flag","","Set the `-static` flag.",1,[[["self"],["bool"]],["build"]]],[11,"no_default_flags","","Disables the generation of default compiler flags. The…",1,[[["self"],["bool"]],["build"]]],[11,"file","","Add a file which will be compiled",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"files","","Add files which will be compiled",1,[[["self"],["p"]],["build"]]],[11,"cpp","","Set C++ support.",1,[[["self"],["bool"]],["build"]]],[11,"cuda","","Set CUDA C++ support.",1,[[["self"],["bool"]],["build"]]],[11,"warnings_into_errors","","Set warnings into errors flag.",1,[[["self"],["bool"]],["build"]]],[11,"warnings","","Set warnings flags.",1,[[["self"],["bool"]],["build"]]],[11,"extra_warnings","","Set extra warnings flags.",1,[[["self"],["bool"]],["build"]]],[11,"cpp_link_stdlib","","Set the standard library to link against when compiling…",1,[[["self"],["option",["str"]],["into",["option"]]],["build"]]],[11,"cpp_set_stdlib","","Force the C++ compiler to use the specified standard…",1,[[["self"],["option",["str"]],["into",["option"]]],["build"]]],[11,"target","","Configures the target this configuration will be compiling…",1,[[["str"],["self"]],["build"]]],[11,"host","","Configures the host assumed by this configuration.",1,[[["str"],["self"]],["build"]]],[11,"opt_level","","Configures the optimization level of the generated object…",1,[[["self"],["u32"]],["build"]]],[11,"opt_level_str","","Configures the optimization level of the generated object…",1,[[["str"],["self"]],["build"]]],[11,"debug","","Configures whether the compiler will emit debug…",1,[[["self"],["bool"]],["build"]]],[11,"force_frame_pointer","","Configures whether the compiler will emit instructions to…",1,[[["self"],["bool"]],["build"]]],[11,"out_dir","","Configures the output directory where all object files and…",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"compiler","","Configures the compiler to be used to produce output.",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"archiver","","Configures the tool used to assemble archives.",1,[[["path"],["self"],["asref",["path"]]],["build"]]],[11,"cargo_metadata","","Define whether metadata should be emitted for cargo…",1,[[["self"],["bool"]],["build"]]],[11,"pic","","Configures whether the compiler will emit position…",1,[[["self"],["bool"]],["build"]]],[11,"use_plt","","Configures whether the Procedure Linkage Table is used for…",1,[[["self"],["bool"]],["build"]]],[11,"static_crt","","Configures whether the /MT flag or the /MD flag will be…",1,[[["self"],["bool"]],["build"]]],[11,"try_compile","","Run the compiler, generating the file `output`",1,[[["str"],["self"]],[["result",["error"]],["error"]]]],[11,"compile","","Run the compiler, generating the file `output`",1,[[["str"],["self"]]]],[11,"try_expand","","This will return a result instead of panicing; see…",1,[[["self"]],[["error"],["result",["vec","error"]],["vec",["u8"]]]]],[11,"expand","","Run the compiler, returning the macro-expanded version of…",1,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"get_compiler","","Get the compiler that's in use for this configuration.",1,[[["self"]],["tool"]]],[11,"try_get_compiler","","Get the compiler that's in use for this configuration.",1,[[["self"]],[["error"],["tool"],["result",["tool","error"]]]]],[11,"to_command","","Converts this compiler into a `Command` that's ready to be…",2,[[["self"]],["command"]]],[11,"path","","Returns the path for this compiler.",2,[[["self"]],["path"]]],[11,"args","","Returns the default set of arguments to the compiler…",2,[[["self"]]]],[11,"env","","Returns the set of environment variables needed for this…",2,[[["self"]]]],[11,"cc_env","","Returns the compiler command in format of CC environment…",2,[[["self"]],["osstring"]]],[11,"cflags_env","","Returns the compiler flags in format of CFLAGS environment…",2,[[["self"]],["osstring"]]],[11,"is_like_gnu","","Whether the tool is GNU Compiler Collection-like.",2,[[["self"]],["bool"]]],[11,"is_like_clang","","Whether the tool is Clang-like.",2,[[["self"]],["bool"]]],[11,"is_like_msvc","","Whether the tool is MSVC-like.",2,[[["self"]],["bool"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","cc::windows_registry","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","cc","",3,[[["error"]],["error"]]],[11,"clone","cc::windows_registry","",0,[[["self"]],["vsvers"]]],[11,"clone","cc","",1,[[["self"]],["build"]]],[11,"clone","","",3,[[["self"]],["error"]]],[11,"clone","","",2,[[["self"]],["tool"]]],[11,"default","","",1,[[],["build"]]],[11,"eq","cc::windows_registry","",0,[[["self"],["vsvers"]],["bool"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","cc","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]]],"p":[[4,"VsVers"],[3,"Build"],[3,"Tool"],[3,"Error"]]};
searchIndex["gcc_shim"] = {"doc":"","i":[[5,"main","gcc_shim","",null,[[]]]],"p":[]};
addSearchOptions(searchIndex);initSearch(searchIndex);