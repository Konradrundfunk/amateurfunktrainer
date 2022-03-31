import 'package:amateurfunktrainer/screens/learning/learningmodule.dart';
import 'package:flutter/material.dart';

class Bottomnavbar extends StatefulWidget{
  @override
  State<StatefulWidget> createState() => _BottomnavbarState();
}

class _BottomnavbarState extends State<Bottomnavbar>{
  var currentindex = 0;
  

  @override
  Widget build(BuildContext context){
  return BottomNavigationBar(
    currentIndex: currentindex,
    onTap: (index){
      setState(() {
        currentindex = index;
      });

      switch(index){
        case 0:
          Navigator.popAndPushNamed(context, '/');
          Learningmodule();
          break;
        case 1:
          Navigator.popAndPushNamed(context, '/examsim');
          break;
        case 2:
          Navigator.popAndPushNamed(context, '/profile');
          break;
        }

      },
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(icon: Icon(Icons.fact_check_outlined), label: "Lernen"),
        BottomNavigationBarItem(icon: Icon(Icons.school_outlined), label: "Prüfungssimulation"),
        BottomNavigationBarItem(icon: Icon(Icons.switch_account_outlined), label: "Lernstand"),
      ],
    );
  }
}